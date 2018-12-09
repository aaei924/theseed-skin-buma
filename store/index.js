import Vuex from 'vuex'

const store = () => new Vuex.Store({
    state: {
        wikiname: '',
        logourl: '',
        user: null,
        sitenotice: null,
        docInfo: null,
        viewInfo: null
    },
    mutations: {
        setWikiInfo (state, wikiinfo) {
            if(wikiinfo.name) state.wikiname = wikiinfo.name;
            if(wikiinfo.logourl) state.logourl = wikiinfo.logourl;
        },
        setUserId (state, id) {
            state.user = {username: id};
        },
        setUserIp (state, ip) {
            state.user = {ip: ip};
        },
        markHasUserDiscuss (state) {
            state.user.hasUserDiscuss = true;
        },
        setSitenotice (state, sitenotice) {
            state.sitenotice = sitenotice;
        },
        setDocInfo (state, docInfo) {
            state.docInfo = docInfo;
        },
        setViewInfo (state, viewInfo) {
            state.viewInfo = viewInfo;
        }
    }
})

export default store