import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'
export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password must contain at least 6 characters'
	})
	@IsString()
	@IsNotEmpty()
	password: string
}
