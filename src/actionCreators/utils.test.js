import { imdbRatingToFiveStar } from "./utils";

describe("imdbRatingToFiveStar", () => {
	it("transforms the string with a float from 0 to 10 to an integer from 1 to 5", () => {
		expect(imdbRatingToFiveStar("0")).toBe(1);
		expect(imdbRatingToFiveStar("0.1")).toBe(1);
		expect(imdbRatingToFiveStar("1.9")).toBe(1);
		expect(imdbRatingToFiveStar("2")).toBe(1);
		expect(imdbRatingToFiveStar("2.1")).toBe(2);
		expect(imdbRatingToFiveStar("4")).toBe(2);
		expect(imdbRatingToFiveStar("4.1")).toBe(3);
		expect(imdbRatingToFiveStar("6")).toBe(3);
		expect(imdbRatingToFiveStar("6.1")).toBe(4);
		expect(imdbRatingToFiveStar("8")).toBe(4);
		expect(imdbRatingToFiveStar("8.1")).toBe(5);
		expect(imdbRatingToFiveStar("10")).toBe(5);
	});
});
