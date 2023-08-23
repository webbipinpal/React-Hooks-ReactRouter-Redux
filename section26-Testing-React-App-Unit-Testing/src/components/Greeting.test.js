import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom"
import Greeting from "./Greeting";

describe('Greeting Component Group', () => {
    test('renders "Hello Word!" This is my first React js Testing code', () => {

        render( <Greeting />);
        const helloFirstTestcode =  screen.getByText('Hello Word!');
        expect(helloFirstTestcode).toBeInTheDocument();
       
    });

    test("renders It's 'good to to see your' if button was not clicked", () => {
        render( <Greeting/> );
        const buttonNotClicked = screen.getByText('good to to see your', { exact:false });
        expect(buttonNotClicked).toBeInTheDocument();
    });

    test("renders 'Changed.' if button was not clicked", () => {
        //Arrange
        render( <Greeting/> );
        //act
        const buttonEllement = screen.getByRole('button');
        fireEvent.click(buttonEllement)

        const buttonClicked = screen.getByText('Clicked!');
        expect(buttonClicked).toBeInTheDocument();
    });

    test('Dose not render "good to to see your" if button was clicked. ', () => {
        //Arrange
        render( <Greeting/> );
        //act
        const buttonEllement = screen.getByRole('button');
        fireEvent.click(buttonEllement)

        const buttonClicked = screen.queryByText('good to to see your', {exact:false});
        expect(buttonClicked).toBeNull();
    });
});
