import { lazy } from "react";
export var MainPageAsync = function () { return lazy(function () { return import("./MainPage"); }); };
