/// <reference path="./crud.d.ts"/>

import * as CRUD from "./crud";
import { RowID, RowElement } from './interface';

const obj: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowID: RowID = CRUD.insertRow(obj);
obj.age = 23;
const updatedRow: RowElement = obj;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
