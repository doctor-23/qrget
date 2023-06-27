import square from "@/assets/img/qr-code-styling(1).png";
import dots from "@/assets/img/qr-code-styling(2).png";
import rounded from "@/assets/img/qr-code-styling(3).png";
import extra_rounded from "@/assets/img/qr-code-styling(4).png";
import classy from "@/assets/img/qr-code-styling(5).png";
import classy_rounded from "@/assets/img/qr-code-styling(6).png";

export default {
    borders: [
        {
            title: "Квадрат",
            value: "square",
            image: square
        },
        {
            title: "Точки",
            value: "dots",
            image: dots
        },
        {
            title: "Закругленный",
            value: "rounded",
            image: rounded
        },
        {
            title: "Сильно закругленный",
            value: "extra-rounded",
            image: extra_rounded
        },
        {
            title: "Классический",
            value: "classy",
            image: classy
        },
        {
            title: "Классический закругленный",
            value: "classy-rounded",
            image: classy_rounded
        },
    ],
    border_size: [
        {
            title: "100x100",
            value: 100
        },
        {
            title: "200x200",
            value: 200
        },
        {
            title: "300x300",
            value: 300
        }
    ],
    radius: [
        {
            title: "Без скругления",
            value: 0
        },
        {
            title: "20px",
            value: 20
        },
        {
            title: "40px",
            value: 40
        },
        {
            title: "60px",
            value: 60
        },
        {
            title: "80px",
            value: 80
        },
        {
            title: "100px",
            value: 100
        },
        {
            title: "120px",
            value: 120
        },
        {
            title: "140px",
            value: 140
        },
        {
            title: "160px",
            value: 160
        },
        {
            title: "180px",
            value: 180
        },
        {
            title: "200px",
            value: 200
        },
    ]
};
