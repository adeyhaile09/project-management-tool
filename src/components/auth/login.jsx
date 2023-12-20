import React, { useState, useEffect } from 'react';
import loginSvg from '../../assets/secure-login-animate.svg';
import {
  Box,
  Button,
  Image,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  rem,
} from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors] = useState({});
  const [user, loading] = useAuthState(auth);
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  useEffect(() => {
    if (loading) {
      return;
    }
  }, [user, loading]);

  return (
    <Stack align="center" justify="center" className="mt-32 mb-32">
      <Box display="flex " className="gap-20">
        <Image w={400} src={loginSvg} alt="Login" />
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            logInWithEmailAndPassword(email, password);
          }}
        >
          <div className="mb-10 text-center">
            <Text size="xl" variant="t2">
              <span className="font-semibold"> Welcome back</span>
            </Text>
            <Text size="sm">
              We are <strong className="text-[#247e7d]">happy</strong> to see
              you back
            </Text>
          </div>
          <TextInput
            w={350}
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={errors.email}
            leftSectionPointerEvents="none"
            rightSection={icon}
            withAsterisk
          />
          <PasswordInput
            label="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            error={errors.password}
            withAsterisk
          />
          <Button
            type="submit"
            color="#247e7d"
            w={350}
            className=" mt-5"
            onClick={'/dashboard'}
          >
            SIGN IN
          </Button>

          <Box ml={230}>
            <Link to="/reset">
              <strong>Forgot Password</strong>
            </Link>
          </Box>
          <Box>
            Don't have an account?{' '}
            <Link to="/register">
              <strong className="text-[#247e7d]">Register</strong>
            </Link>{' '}
            now.
          </Box>
        </form>
      </Box>
    </Stack>
  );
};

export default Login;
