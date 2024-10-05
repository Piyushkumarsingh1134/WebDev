import { atom } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});

export const jobAtom = atom({
    key: "jobAtom",
    default: 116
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 1
});
