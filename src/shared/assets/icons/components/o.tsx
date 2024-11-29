import {SVGProps} from "react";

const o = ({ width = 160, height = 160, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm0-3A5 5 0 1 0 8 3a5 5 0 0 0 0 10Z"
            clipRule="evenodd"
        >
            <animate
                attributeName="fill"
                from="transparent" // Начальный цвет заливки
                to="#fff" // Конечный цвет заливки
                dur="1s" // Длительность анимации
                begin="0s" // Начинать сразу
                fill="freeze" // Сохранять конечное состояние
            />
            <animate
                attributeName="opacity"
                from="0" // Начальная прозрачность
                to="1" // Конечная прозрачность
                dur="1s" // Длительность анимации
                begin="0s" // Начинать сразу
                fill="freeze" // Сохранять конечное состояние
            />

        </path>
    </svg>
)
export default o
