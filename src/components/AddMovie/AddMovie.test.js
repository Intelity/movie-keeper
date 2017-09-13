import React from "react";
import { shallow } from "enzyme";
import Input from "muicss/lib/react/input";

import AddMovie from "./AddMovie";

describe("<AddMovie />", () => {
	const props = {
		title: "Title",
		director: "Director",
		year: 2000,
		rating: 5
	};
	const wrapper = shallow(
		<AddMovie
			{...props}
			onEditDirector={() => {}}
			onEditYear={() => {}}
			onEditRating={() => {}}
			onSubmit={() => {}}
			onCancel={() => {}}
		/>
	);

	it("renders trivial movie fields", () => {
		expect(wrapper.find(`Input[value=${props.year}]`)).toHaveLength(1);
		expect(wrapper.find(`Input[value='${props.director}']`)).toHaveLength(
			1
		);
	});

	it("renders two buttons", () => {
		expect(wrapper.find("Button")).toHaveLength(2);
	});
});
