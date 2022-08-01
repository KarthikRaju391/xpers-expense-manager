import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Button, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
} from '@chakra-ui/react';

// styles
export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
`;

const Login = () => {
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
					<FormLabel htmlfor="email">Email</FormLabel>
					<Input type="email" />
					<FormLabel htmlfor="password">Password</FormLabel>
					<Input type="password" />
					<Button w="fit-content" my={4}>
						login
					</Button>
					<Link as={ReachLink} to="/register">
						No account yet? Register
					</Link>
				</FormControl>
			</Flex>
		</Container>
	);
};

export default Login;
