interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

class MessageStorage {
  private messages: ContactMessage[] = [];

  saveMessage(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): ContactMessage {
    const newMessage: ContactMessage = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date(),
      read: false
    };

    this.messages.unshift(newMessage); // Add to beginning of array
    console.log(`💾 New message saved from ${formData.name} (${formData.email})`);
    return newMessage;
  }

  getAllMessages(): ContactMessage[] {
    return this.messages;
  }

  getUnreadMessages(): ContactMessage[] {
    return this.messages.filter(msg => !msg.read);
  }

  markAsRead(messageId: string): boolean {
    const message = this.messages.find(msg => msg.id === messageId);
    if (message) {
      message.read = true;
      return true;
    }
    return false;
  }

  getMessageById(messageId: string): ContactMessage | undefined {
    return this.messages.find(msg => msg.id === messageId);
  }

  getMessageCount(): { total: number; unread: number } {
    return {
      total: this.messages.length,
      unread: this.messages.filter(msg => !msg.read).length
    };
  }
}

export const messageStorage = new MessageStorage();
export type { ContactMessage };