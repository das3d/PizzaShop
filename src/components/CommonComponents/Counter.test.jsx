import Counter from "./Counter";
import {act, create} from "react-test-renderer";

describe("Counter component", ()=>{
    test('styles should be for pizza block', ()=>{
        //1.Create component
        const component = create(<Counter isCart={false} count={5}/>)
        //2.Finding <div> element with styles for Counter component
        const root = component.root
        let div = root.findByType("div")
        //3.Expectation styles for pizza block
        expect(div._fiber.pendingProps.children.props.className).toBe("pizza__counter")

    })
    test('styles should be for cart block', ()=>{
        //1.Create component
        const component = create(<Counter isCart={true} count={5}/>)
        //2.Finding <div> element with styles for Counter component
        const root = component.root
        let div = root.findByType("div")
        //3.Expectation styles for cart block
        expect(div.props.children.props.className).toBe("menu__counter")

    })
    test('count products should be incremented', ()=>{
        //1.Create component
        const component = create(<Counter isCart={true} count={5}/>)
        //2.Finding button for increment products
        const root = component.root
        let buttonPlus = root.findAllByType("div")[2]
        //3.Finding element with count products
        let span = root.findByType("span")
        //4.Button was clicked
        act(()=>{buttonPlus.props.onClick()})
        //5.Expectation increment count products
        expect(span.props.children).toBe(6)

    })
    test('count products should be decremented', ()=>{
        //1.Create component
        const component = create(<Counter isCart={true} count={5}/>)
        //2.Finding button for decrement products
        const root = component.root
        let buttonMinus = root.findAllByType("div")[3]
        //3.Finding element with count products
        let span = root.findByType("span")
        //4.Button was clicked
        act(()=>{buttonMinus.props.onClick()})
        //5.Expectation decrement count products
        expect(span.props.children).toBe(4)

    })
})
