import { createAction } from '@reduxjs/toolkit';

export const provinces = createAction('PROVIDERS');
export const travel = createAction('TRAVEL');
export const planeClass = createAction('PLANE_CLASS');
export const departLocation = createAction('DEPART_LOCATION');
export const landLocation = createAction('LAND_LOCATION');
export const departDay = createAction('DEPART_DAY');
export const dateArrival = createAction('DATE_ARRIVAL');
export const updateDepartLocation = createAction('UPDATE_DEPART_LOCATION');