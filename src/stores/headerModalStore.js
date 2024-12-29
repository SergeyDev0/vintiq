import { makeAutoObservable } from "mobx";

class headerModalStore {
	modal = false;

	constructor() {
		makeAutoObservable(this);
	}

	setModal(bool) {
		this.modal = bool;
	}
}

export default new headerModalStore();