function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.Childen;
    // domElement.setAttribute("href",reactElement.props.href);
    // domElement.setAttribute("target",reactElement.props.target);
    // container.appendChild(domElement)

    const domEelement = document.createElement(reactElement.type);
    domEelement.innerHTML = reactElement.Childen;
     for (const prop in reactElement.props ) {

        if(prop === "Childrn") continue

       domEelement.setAttribute(prop,reactElement.props[prop])
     }

     container.appendChild(domEelement);


}


const reactElement = {
    type: 'a',
    props :{
        href:"https://google.com",
        target: '_blank'
    },
    Childen : "Click met to visit google"
}


const mainContainer = document.getElementById("root");

customRender(reactElement,mainContainer)