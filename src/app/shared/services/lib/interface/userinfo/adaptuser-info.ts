export interface AdaptuserInfo {
    message: string
    user: User
  }
  
  export interface User {
    _id: string
    username: string
    firstName: string
    lastName: string
    email: string
    phone: string
    role: string
    isVerified: boolean
    createdAt: string
    passwordChangedAt: string
  }
  