import { INavbarBtn } from "./NavbarBtn";

const saveBtn: INavbarBtn = {
  variety: "save",
  loading: false,
  children: "Save & Publish",
};

const previewBtn: INavbarBtn = {
  variety: "preview",
  loading: false,
  children: "Preview",
};

const deleteBtn: INavbarBtn = {
  variety: "delete",
  loading: false,
  children: "Delete",
};

const loadingSaveBtn: INavbarBtn = {
  variety: "save",
  loading: true,
  children: "Save & Publish",
};

const loadingDeleteBtn: INavbarBtn = {
  variety: "delete",
  loading: true,
  children: "Delete",
};

export const mockNavbarBtnProps = {
  saveBtn,
  previewBtn,
  deleteBtn,
  loadingSaveBtn,
  loadingDeleteBtn,
};
