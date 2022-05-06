import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Home from "./home";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));


describe('Test Home component', () => {
    var mock, url;
    beforeEach(() => {
        mock = new MockAdapter(axios);
        url = "https://random.dog/woof.json";
    })
    afterEach(() => {
        jest.clearAllMocks();
        window.localStorage.removeItem('favDogImg')
    });

    it('Happy Path Scenario', async () => {
        const mockData = { 'url': 'http://mockImage.jpg' };
        mock.onGet(url).reply(200, mockData);
        render(<Home />);
        expect(await screen.findAllByRole("img")).toHaveLength(6);

        fireEvent.click(screen.getByText("Next/Refresh"));
        expect(await screen.findAllByRole("img")).toHaveLength(6);

        fireEvent.click(screen.getByAltText("1"));
        fireEvent.click(screen.getByText("Favourites"));
        expect(JSON.parse(window.localStorage.getItem('favDogImg'))).toEqual([mockData.url]);
    });
})