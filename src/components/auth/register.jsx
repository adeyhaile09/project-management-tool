import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { useDisclosure } from '@mantine/hooks';
import { auth, registerWithEmailAndPassword } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errors] = useState({});
  const [user, loading] = useAuthState(auth);
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [visible, { toggle }] = useDisclosure(false);

  const register = (e) => {
    e.preventDefault();
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <Stack align="center" justify="center" className="mt-32">
      <Box display="flex " className="gap-20">
        <Image w={450} src={loginSvg} />

        <form className="w-full" onSubmit={register}>
          <div className="mb-10 text-center">
            <Text size="xl" variant="t2">
              <span className="font-semibold"> Welcome back</span>
            </Text>
            <Text size="sm">
              We are <strong className="text-[#247e7d]">happy</strong> to have
              you
            </Text>
          </div>

          <TextInput
            w={350}
            label="Full Name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            autoComplete="name"
            error={errors.name}
            withAsterisk
          />
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
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            onChange={(e) => setCPassword(e.target.value)}
            value={cPassword}
            error={errors.confirmPassword}
            withAsterisk
            visible={visible}
            onVisibilityChange={toggle}
          />
          <Button type="submit" color="#247e7d" w={350} className=" mt-5">
            Sign up
          </Button>

          <Box mt={10} className="text-center">
            Already have an account?
            <Link to="/">
              <strong className="text-[#247e7d]">Login</strong>
            </Link>
            now.
          </Box>
          {/* <div className="flex items-center place-content-evenly text-center w-9/12 pt-10">
            <span className="border-t theme-border flex-1" />
            <span className="px-4 text-sm hover:underline cursor-pointer">
              <Link to={AppRoutes.login}>DO YOU HAVE AN ACCOUNT?</Link>
            </span>
            <span className="border-t theme-border flex-1" />
          </div>  */}
        </form>
      </Box>
    </Stack>
  );
};

export default Register;
