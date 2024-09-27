
type UserRole = 'ordinary' | 'pro';

export type User = {
    name: string; 
    email: string; 
    avatarUrl?: string; 
    password: string; 
    userRole: UserRole; 
}