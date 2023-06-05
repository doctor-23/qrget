import eventBus from "@/eventBus";

export default function getCurrentCode(value) {
    console.log(value)

    eventBus.$emit('getCurrentCode', {
        value: value
    })
    console.log(eventBus)
}
