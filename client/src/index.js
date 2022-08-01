import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

ReactDOM.render(
	<ChakraProvider>
		<App />
	</ChakraProvider>,
	document.getElementById('root')
);
