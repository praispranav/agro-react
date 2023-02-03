import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  CardFooter,
  CardHeader,
  Card,
  CardBody,
  Table,
  Button,
  Modal,
  ModalBody,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addMasterCropForm,
  deleteMasterCrop as deleteMasterCropSaga,
  editMasterCropFrom,
  getMasterCrop,
} from "../../../store/master/masterCrop/actionType";

const columnHelper = createColumnHelper();

const ColumnAction = ({ id }) => {
  const { data } = useSelector((state) => ({ data: state.MasterCrop.data }));

  const [isDeleteConfirmationModalOpen, setDeleteConfirmationModalOpen] =
    useState(false);
  const findCropType = (id) => data.find((i) => i.masterCropID === id);

  const dispatch = useDispatch();

  const toggleConfirmationModal = () => {
    setDeleteConfirmationModalOpen((prev) => !prev);
  };

  const deleteCropType = () => {
    dispatch(deleteMasterCropSaga({ MasterCropID: id }));
    toggleConfirmationModal();
  };

  const editCropType = () => {
    dispatch(editMasterCropFrom(findCropType(id)));
  };
  return (
    <React.Fragment>
      <Button
        onClick={editCropType}
        color="success"
        size="sm"
        className="btn-icon"
        outline
      >
        <i className="ri-pencil-line"></i>
      </Button>
      <Button
        onClick={toggleConfirmationModal}
        color="danger"
        size="sm"
        className="btn-icon ms-3"
        outline
      >
        <i className="ri-delete-bin-2-line"></i>
      </Button>
      <Modal
        isOpen={isDeleteConfirmationModalOpen}
        toggle={toggleConfirmationModal}
        centered
      >
        <ModalBody>
          <div className="text-end">
            <button
              type="button"
              onClick={() => {
                toggleConfirmationModal();
              }}
              className="btn-close text-end"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="d-flex justify-content-center">
            <div className="mt-2 text-center">
              <lord-icon
                src="https://cdn.lordicon.com/vyukcgvf.json"
                trigger="loop"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>

              <h4 className="mb-3 mt-4">Are you sure want to delete?</h4>
              <p className="text-muted fs-15 mb-4">
                You will not able to revert this back.
              </p>
              <div className="hstack gap-2 justify-content-center">
                <button
                  className="btn btn-light"
                  onClick={toggleConfirmationModal}
                >
                  Close
                </button>
                <button
                  className="btn btn-soft-danger"
                  onClick={deleteCropType}
                >
                  <i className=" ri-delete-bin-2-line align-bottom"></i> Delete
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

const getStatusColor = (status) => {
  if (status) return "primary";
  else return "danger";
};

const columns = [
  columnHelper.accessor("rowNum", {
    cell: (info) => info.getValue(),
    header: () => <span>#</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.masterCropName, {
    id: "masterCropName",
    cell: (info) => info.getValue(),
    header: () => <span>Master Crop Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.masterCropDescription, {
    id: "masterCropDescription",
    cell: (info) => (
      <p
        className="m-0 p-0"
        style={{ width: "250px", textOverflow: "ellipsis", overflow: "hidden" }}
      >
        {info.getValue() || "N/A"}
      </p>
    ),
    header: () => <span>Description</span>,
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor((row) => row.cropTypeName, {
    id: "cropTypeName",
    cell: (info) => info.getValue(),
    header: () => <span>Crop Type Name</span>,
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor((row) => row.cropTypeDescription, {
    id: "cropTypeDescription",
    cell: (info) => (
      <p
        className="m-0 p-0"
        style={{ width: "250px", textOverflow: "ellipsis", overflow: "hidden" }}
      >
        {info.getValue() || "N/A"}
      </p>
    ),
    header: () => <span> Crop Type Description</span>,
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor((row) => row.masterCropID, {
    id: "Action",
    cell: (info) => <ColumnAction id={info.getValue()} />,
    header: () => <span>Action</span>,
    footer: (info) => info.column.id,
  }),
];

export default function List() {
  const { data } = useSelector((state) => ({
    data: state.MasterCrop.data,
  }));
  const [sorting, setSorting] = React.useState([]);

  const dispatch = useDispatch();
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    dispatch(getMasterCrop());
    console.log("Get Master Crop");
  }, []);

  const addCropType = () => {
    dispatch(addMasterCropForm());
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <h5 className="card-title">Master Crop</h5>
        <div className="d-flex align-items-center">
          <div>
            <select
              className="form-select"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              <option value={"5"}>5</option>
              <option value={"10"}>10</option>
              <option value={"20"}>20</option>
              <option value={"50"}>50</option>
              <option value={"100"}>100</option>
            </select>
          </div>
          <Button
            onClick={addCropType}
            color="primary"
            className="btn-label"
            size="sm"
          >
            <i className="ri-add-fill label-icon align-middle fs-13 me-2"></i>
            Add
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <Table className="table-hover align-middle table-nowrap mb-0">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                      {{
                        asc: <i className="mdi mdi-chevron-up"></i>,
                        desc: <i className="mdi mdi-chevron-down"></i>,
                      }[header.column.getIsSorted()] ?? (
                        <i
                          style={{ visibility: "hidden" }}
                          className="mdi mdi-chevron-down"
                        ></i>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td scope="row" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="d-flex justify-content-center mt-4 mb-0">
          <PaginationContainer
            table={table}
            currentPage={table.getState().pagination.pageIndex + 1}
            size={
              data[0] && data[0].totalCount
                ? data[0].totalCount / table.getState().pagination.pageSize
                : 1
            }
          />
        </div>
      </CardBody>
    </Card>
  );
}

function PaginationContainer({ size, table, currentPage }) {
  const [totalPages, setTotalPages] = useState([]);

  const generatePagination = () => {
    const newList = [];
    for (let x = 0; x < size; x++) {
      newList.push(
        <PaginationItem
          onClick={() => table.setPageSize(x + 1)}
          active={x + 1 === currentPage}
        >
          <PaginationLink> {x + 1} </PaginationLink>
        </PaginationItem>
      );
    }
    setTotalPages(newList);
  };

  useEffect(() => {
    generatePagination();
  }, [size, currentPage]);
  return (
    <Pagination className="pagination-rounded mb-0 pb-0">
      <PaginationItem disabled>
        {" "}
        <PaginationLink to="#"> ← </PaginationLink>{" "}
      </PaginationItem>
      {totalPages}
      <PaginationItem>
        {" "}
        <PaginationLink to="#"> → </PaginationLink>{" "}
      </PaginationItem>
    </Pagination>
  );
}
