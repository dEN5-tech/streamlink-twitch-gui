import TwitchAdapter from "data/models/twitch/adapter";


export default class TwitchUserAdapter extends TwitchAdapter {
	coalesceFindRequests = true;
	findManyIdString = "login";

	// use custom findRecord URL
	findRecord( store, type, id, snapshot ) {
		const url = this.buildURL( type, null, snapshot, "findRecord" );
		const data = {
			login: id
		};

		return this.ajax( url, "GET", { data } );
	}

	urlForFindRecord( id, type ) {
		return this._buildURL( type );
	}
}
