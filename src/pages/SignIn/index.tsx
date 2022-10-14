import { useState, FormEvent } from 'react';
import axios from 'axios';
import { Checkbox } from '@radix-ui/react-checkbox'
import { Envelope, Lock } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'
import { Logo } from '../../components/Logo'
import { Text } from '../../components/Text'
import { TextInput } from '../../components/TextInput'

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        await axios.post('/sessions', {
            email: 'email@email.com',
            password: 123456789,
        })

        setIsUserSignedIn(true);
    }

    return (
        <div className="w-full h-auto bg-gray-900 flex flex-col items-center justify-center text-gray-100">
            <header className="flex flex-col items-center">
                <Logo />

                <Heading size='lg' className="mt-4">
                    Ignite Lab
                </Heading>

                <Text size='lg' className="text-gray-400 mt-1">
                    Logue e comece a usar
                </Text>
            </header>

            <form 
                className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
                onSubmit={handleSignIn}
            >
                { isUserSignedIn && <Text>Login realizado!!</Text> }
                <label htmlFor="email" className='flex flex-col gap-3'>
                    <Text className='font-semibold'>Endereço de e-mail:</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>

                        <TextInput.Input id="email" placeholder='Type your e-mail address' />
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className='flex flex-col gap-3'>
                    <Text className='font-semibold'>Senha:</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>

                        <TextInput.Input type="password" id="password" placeholder='*********' />
                    </TextInput.Root>
                </label>

                <label htmlFor="remember" className='flex items-center gap-2'>
                    <Checkbox id="remember" />
                    <Text size="sm" className="text-gray-200">Manter-me conectado</Text>
                </label>

                <Button type="submit" className="mt-4">Logar</Button>

                <footer className="flex flex-col items-center gap-4 mt-8">
                    <Text asChild size="sm">
                        <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
                    </Text>

                    <Text asChild size='sm'>
                        <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie agora.</a>
                    </Text>
                </footer>
            </form>
        </div>
    )
}