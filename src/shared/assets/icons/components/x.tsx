import { SVGProps } from "react";

const X = ({ width = 160, height = 160, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <path
            fill="#fff" // Начальный цвет заливки
            d="M5.172 8 L1.086 3.914 L3.914 1.086 L8 5.172 L12.086 1.086 L14.914 3.914 L10.83 8 L14.915 12.086 L12.087 14.914 L8 10.83 L3.914 14.914 L1.086 12.086 L5.172 8 Z"
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
);

export default X;
