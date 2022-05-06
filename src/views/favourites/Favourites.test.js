import { render, screen, fireEvent } from "@testing-library/react";
import Favourites from "./Favourites";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Test Home component', () => {
    beforeEach(() => {
        window.localStorage.setItem('favDogImg', JSON.stringify(['http://mockImage.jpg']));  
    })
    afterEach(() => {
        jest.clearAllMocks();
        window.localStorage.removeItem('favDogImg')
    });

    it('Happy Path Scenario', async () => {
        render(<Favourites />);
        expect(await screen.findAllByRole("img")).toHaveLength(1);
        expect(JSON.parse(window.localStorage.getItem('favDogImg'))).toEqual(['http://mockImage.jpg']);

        fireEvent.click(screen.getByText("Home"));
        expect(mockedUsedNavigate).toBeCalled();
    });
})