import React from 'react';
import { Container } from './Login';

import { Box, Flex, Button, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
} from '@chakra-ui/react';

const Register = () => {
	return (
		<Container>
			<Flex
				flexDirection="column"
				padding="3em 1em"
				width="50%"
				align="center"
				justify="center"
			>
				<FormControl display="flex" flexDirection="column">
					<FormLabel htmlfor="email">First Name</FormLabel>
					<Input type="text" />
					<FormLabel htmlfor="email">Last Name</FormLabel>
					<Input type="text" />
					<FormLabel htmlfor="email">Username</FormLabel>
					<Input type="text" />
					<FormLabel htmlfor="email">Email</FormLabel>
					<Input type="email" />
					<FormLabel htmlfor="password">Password</FormLabel>
					<Input type="password" />
					<Button w="fit-content" my={4}>
						login
					</Button>
					<Link as={ReachLink} to="/register">
						Already have an account? Login
					</Link>
				</FormControl>
			</Flex>
		</Container>
	);
};

export default Register;
