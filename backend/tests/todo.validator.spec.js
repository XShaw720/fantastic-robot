import { errorHandler } from "../services/todo/todo.validator";
import {validationResult} from 'express-validator';
import {mockRequest, mockResponse} from 'jest-mock-req-res';

jest.mock('express-validator', () => ({
    ...jest.requireActual('express-validator'),
    validationResult: jest.fn()
}));

describe('errorHandler', () => {
    it('should handle validation errors and return 400', () => {
        // Arrange
        const req = mockRequest();
        const res = mockResponse();
        const next = jest.fn();
        const errors = ['tis no good', 'c\'est pas bon ca', 'esto no bueno']

        validationResult.mockImplementationOnce(() => ({
            isEmpty: () => false,
            array: () => errors
        }));

        const sut = errorHandler(() => {});

        // Act
        sut(req, res, next);

        // Assert
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({errors:errors})
    });

    it('should call the provided function when there are no validation errors', async () => {
        // Arrange
        const req = mockRequest();
        const res = mockResponse();
        const next = jest.fn();
        const fn = jest.fn();

        validationResult.mockImplementationOnce(() => ({
            isEmpty: () => true
        }));

        const sut = errorHandler(fn);

        // Act
        await sut(req, res, next);

        // Assert
        expect(fn).toHaveBeenCalledWith(req, res, next);
    });

    it('should catch errors from provided function and return 500', async () => {
        // Arrange
        const req = mockRequest();
        const res = mockResponse();
        const next = jest.fn();
        const error = new Error('ruh-roh');

        validationResult.mockImplementationOnce(() => ({
            isEmpty: () => true
        }));

        const sut = errorHandler(() => Promise.reject(error));

        // Act
        await sut(req, res, next);

        // Assert
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({error:error.message})
    });
});
