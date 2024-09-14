import {WeatherTile} from "../../lib/main.ts";
import {StoryObj} from "@storybook/react";
import {WeatherTileProps} from "../../lib/components/WeatherTile";

export default {
    title: 'Components/WeatherTile',
    component: WeatherTile,
}

type Story = StoryObj<typeof WeatherTile>

export const Default: Story = {
    args: {
        city: "Berlin43",
        feelsLike: 12,
        humidity: 12,
        windSpeed: 100,
        degree: 55,
        pressure: 2048
    } as WeatherTileProps
}