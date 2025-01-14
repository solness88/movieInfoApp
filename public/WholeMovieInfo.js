export class WholeMovieInfo {
    constructor() {
        this.internetAccess = '全編インターネットＯＫ';  // デフォルト値
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const upperRadioButtonsInternet = document.querySelectorAll('input[type="radio"][name="upperRadioButtonsInternet"]');
        upperRadioButtonsInternet.forEach(radio => {
            radio.addEventListener('change', () => {
                this.internetAccess = radio.value;
            });
        });
    }

    getInternetAccess() {
        return this.internetAccess;
    }
}