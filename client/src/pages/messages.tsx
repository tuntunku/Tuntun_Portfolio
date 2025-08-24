import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}

interface MessagesResponse {
  success: boolean;
  messages: ContactMessage[];
  counts: {
    total: number;
    unread: number;
  };
}

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery<MessagesResponse>({
    queryKey: ['/api/messages'],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (messageId: string) => {
      const response = await fetch(`/api/messages/${messageId}/read`, {
        method: 'POST',
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/messages'] });
    },
  });

  const handleMessageClick = (message: ContactMessage) => {
    setSelectedMessage(message);
    if (!message.read) {
      markAsReadMutation.mutate(message.id);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading messages...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500">Error loading messages. Please try again.</p>
        </div>
      </div>
    );
  }

  const messages = data?.messages || [];
  const counts = data?.counts || { total: 0, unread: 0 };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">Contact Messages</h1>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-lg px-4 py-2">
              Total: {counts.total}
            </Badge>
            {counts.unread > 0 && (
              <Badge className="bg-red-500 text-white text-lg px-4 py-2">
                Unread: {counts.unread}
              </Badge>
            )}
          </div>
        </div>

        {messages.length === 0 ? (
          <Card className="glass-card">
            <CardContent className="p-12 text-center">
              <i className="fas fa-inbox text-6xl text-muted-foreground mb-4"></i>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">No messages yet</h3>
              <p className="text-muted-foreground">Contact form submissions will appear here.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Messages List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Messages ({messages.length})</h2>
              {messages.map((message) => (
                <Card 
                  key={message.id}
                  className={`glass-card cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                    selectedMessage?.id === message.id ? 'ring-2 ring-primary' : ''
                  } ${!message.read ? 'border-l-4 border-l-red-500' : ''}`}
                  onClick={() => handleMessageClick(message)}
                  data-testid={`message-${message.id}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{message.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        {!message.read && (
                          <Badge className="bg-red-500 text-white">New</Badge>
                        )}
                        <span className="text-sm text-muted-foreground">
                          {formatDate(message.timestamp)}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-600 dark:text-primary-400 text-sm mb-2">
                      {message.email}
                    </p>
                    <p className="font-medium mb-2">{message.subject}</p>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {message.message}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Message Detail */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              {selectedMessage ? (
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{selectedMessage.subject}</CardTitle>
                      {!selectedMessage.read && (
                        <Badge className="bg-red-500 text-white">New</Badge>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-medium">{selectedMessage.name}</p>
                      <a 
                        href={`mailto:${selectedMessage.email}`}
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                        data-testid="reply-email"
                      >
                        {selectedMessage.email}
                      </a>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(selectedMessage.timestamp)}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
                    </div>
                    <div className="mt-6">
                      <Button 
                        asChild
                        className="gradient-primary hover:shadow-lg"
                      >
                        <a href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}>
                          <i className="fas fa-reply mr-2"></i>
                          Reply to {selectedMessage.name}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="glass-card">
                  <CardContent className="p-12 text-center">
                    <i className="fas fa-mouse-pointer text-4xl text-muted-foreground mb-4"></i>
                    <p className="text-muted-foreground">
                      Select a message to view details
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}