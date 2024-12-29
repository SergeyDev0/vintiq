import { makeAutoObservable } from "mobx";

class headerModalStore {
	modal = false;

	constructor() {
		makeAutoObservable(this);
	}

	setModal(bool) {
		this.modal = bool;
	}

	toggleModal() {
		this.modal = !this.modal;
	}
}

export default new headerModalStore();