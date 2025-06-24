// Main entry point for the TypeScript project

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
    console.log(`User ${user.name} added successfully!`);
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  removeUser(id: number): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`User with ID ${id} removed successfully!`);
      return true;
    }
    console.log(`User with ID ${id} not found.`);
    return false;
  }
}

// Example usage
function main(): void {
  console.log('Welcome to CET Test TypeScript Project!');
  
  const userService = new UserService();
  
  // Add some sample users
  userService.addUser({ id: 1, name: 'John Doe', email: 'john@example.com' });
  userService.addUser({ id: 2, name: 'Jane Smith', email: 'jane@example.com' });
  
  // Get all users
  console.log('All users:', userService.getAllUsers());
  
  // Get specific user
  const user = userService.getUser(1);
  console.log('Found user:', user);
  
  // Remove a user
  userService.removeUser(1);
  
  console.log('Remaining users:', userService.getAllUsers());
}

// Run the main function
main();
