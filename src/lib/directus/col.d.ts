
export type TimerData = {
	id: ID;
	timezone: string;
	start_at: string;
	desktop_bg: string | null;
	mobile_bg: string | null;
};


export type CustomCollections = {
	TimerData: TimerData;
};
