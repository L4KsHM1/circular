import './style.css'

const contentSection = document.querySelector('.content-sec')

const data = [
    {
        title: `Creativity is the key`,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam optio veniam magnam sapiente aliquid exercitationem eius culpa alias! Repellat.`
    },
    {
        title: `What's the future marketing press?`,
        text: `Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    },
    {
        title: `What's the future marketing press?`,
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
    },
];



data.forEach((item) => {
    contentSection.innerHTML += `    
    <div class="sections">
        <h1>${item.title}</h1>

        <p>
        ${item.text}
        </p>
        <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
        style="enable-background: new 0 0 203.622 203.622"
        xml:space="preserve"
        width="150"
        height="150"
        transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,0,0)"
        >
        <g>
            <g>
            <g>
                <path
                style="fill: #bec8ca"
                points="203.615,7.347 196.279,0 10.404,185.875 10.404,72.851 0.007,72.851 0.007,203.608 
        130.764,203.622 130.764,193.226 17.755,193.226 			"
                d="M149.995 5.412 144.591 0 7.663 136.926V53.667H0.005v96.323l96.324 0.011v-7.659H13.08Z"
                ></path>
            </g>
            </g>
        </g>
        </svg>
    
</div>
  <hr />
`;
});
