# Portfolio Website

## Overview

This is a personal portfolio website for Tuntun Kumar, a final-year Bachelor of Engineering student specializing in Computer Science. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a PostgreSQL database integration ready for future enhancements. The portfolio showcases professional information, technical skills, projects, and provides a contact form for potential employers or collaborators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component system for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Theme Support**: Built-in dark/light theme toggle with persistent user preferences

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for robust API development
- **Development Setup**: Vite integration for hot module replacement and fast development builds
- **Database ORM**: Drizzle ORM configured for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production

### Component Architecture
- **UI Components**: Comprehensive component library including navigation, hero section, about, skills, projects, contact form, and footer
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Responsive Design**: Mobile-first approach with adaptive layouts for all screen sizes

### Build and Development Tools
- **Build Tool**: Vite for fast builds and optimized production bundles
- **TypeScript Configuration**: Strict type checking with path aliases for clean imports
- **Code Quality**: ESBuild for server bundling and PostCSS for CSS processing
- **Asset Handling**: Static asset management with proper path resolution

## External Dependencies

### Database and ORM
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Drizzle ORM**: Type-safe database operations with migration support
- **Connection Management**: Environment-based database URL configuration

### UI and Styling
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Font Integration**: Google Fonts (Inter) and Font Awesome for typography and icons

### Development and Deployment
- **Replit Integration**: Configured for Replit development environment with banner support
- **Error Handling**: Runtime error overlay for development debugging
- **Session Management**: PostgreSQL session storage with connect-pg-simple

### Form and Data Handling
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation for type-safe data processing
- **Date Management**: date-fns for date manipulation and formatting

### Additional Features
- **Query Client**: Configured with custom error handling and caching strategies
- **Toast Notifications**: User feedback system for form submissions and interactions
- **Carousel Support**: Embla Carousel for interactive content display