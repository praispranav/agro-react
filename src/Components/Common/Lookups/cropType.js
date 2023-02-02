import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { default as React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
} from "reactstrap";
import { getCropTypeData } from "../../../store/lookup/actions";
import styled from "styled-components";

const CloseModalButtonContainer = styled.div({
  position: "absolute",
  top: "20px",
  right: "20px",
});

const columnHelper = createColumnHelper();

const getBadges = (status) => {
  if (status) return "primary";
  else return "danger";
};

const columns = [
  columnHelper.accessor("cropTypeId", {
    cell: (info) => info.getValue(),
    header: () => <span>Id</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.cropTypeName, {
    id: "cropTypeName",
    cell: (info) => info.getValue(),
    header: () => <span>Crop Type Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.description, {
    id: "description",
    cell: (info) => (
      <p
        className="m-0 p-0"
        style={{ width: "350px", textOverflow: "ellipsis", overflow: "hidden" }}
      >
        {info.getValue() || "N/A"}
      </p>
    ),
    header: () => <span>Description</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.id, {
    id: "Action",
    cell: (info) => (
      <Button size="sm" className="bg-gradient" color="light">
        Select
      </Button>
    ),
    header: () => <span>Action</span>,
    footer: (info) => info.column.id,
  }),
];

export default function LookUpCropType() {
  const [selectedColumn, setSelectedColumn] = useState(null);
  const { data } = useSelector((state) => ({
    data: state.Lookup.cropType,
  }));
  const [sorting, setSorting] = React.useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  function toggle() {
    setIsOpen((prev) => {
      return !prev;
    });

    if (!isOpen) dispatch(getCropTypeData());
  }

  const onRowClick = (data) => {
    console.log("Data======", data);
    setSelectedColumn(data.original);
  };

  const closeDetailView = () => {
    setSelectedColumn(null);
  };
  return (
    <React.Fragment>
      <Button color="primary" outline onClick={() => toggle()}>
        Crop Type
      </Button>

      <Modal id="farm-type" isOpen={isOpen} toggle={toggle} centered size="lg">
        <ModalHeader className=" d-flex justify-content-between">
          <div className="d-flex" onClick={() => closeDetailView()}>
            {selectedColumn ? <i className="mdi mdi-arrow-left"></i> : null}
            <h5 className="ms-1 card-title">Crop Type</h5>
          </div>
        </ModalHeader>
        <CloseModalButtonContainer>
          <Button
            type="button"
            aria-label="Close"
            className="btn-close"
            onClick={() => setIsOpen(false)}
          ></Button>
        </CloseModalButtonContainer>
        <ModalBody>
          {!selectedColumn ? (
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
                    <tr key={row.id} onClick={() => onRowClick(row)}>
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
          ) : (
            <div>
              <p>Name :{selectedColumn.cropTypeName}</p>
              <p>Description :{selectedColumn.description}</p>
            </div>
          )}
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}
