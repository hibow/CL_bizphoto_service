import React from 'react';
import {
  cleanup, render, fireEvent, getByTestId,
} from 'react-testing-library';
import Modal from '../Modal';

afterEach(cleanup);

test('modal shows the children and a close button', () => {
  const handleClose = jest.fn();

  const { getByText } = render(
    <Modal hide={handleClose} />,
  );
  expect(getByText('Test')).toBeTruthy();
  const button = getByTestId(document.body, 'close');
  fireEvent.click(button);
  expect(handleClose).toHaveBeenCalledTimes(1);
});
