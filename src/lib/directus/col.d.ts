
export type TimerData = {
	id: ID;
	timezone: string;
	name: string;
	start_at: string;
	desktop_bg: string | null;
	mobile_bg: string | null;
	head: string | null;
};

export type SeriesList = {
	id: UUID;
	name: string;
	description: string;
	tags: string[];
};


export type CustomCollections = {
	TimerData: TimerData;
	SeriesList: SeriesList,
};
