import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { default as React, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
  Input,
  Col,
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

export default function LookUpCropType({ value, setSelectedRow, disabled }) {
  const [selectedColumn, setSelectedColumn] = useState(null);
  const { data } = useSelector((state) => ({
    data: state.Lookup.cropType,
  }));
  const [sorting, setSorting] = React.useState([]);
  const columns = useMemo(
    () => [
      columnHelper.accessor('serial', {
        cell: (info) => info.getValue(),
        header: () => <span>#</span>,
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
            style={{
              width: "350px",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
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
          <Button
            size="sm"
            className="bg-gradient"
            color="light"
            onClick={(e) => {
              setSelectedRow(info.row.original);
              toggle();
              e.stopPropagation();
            }}
          >
            Select
          </Button>
        ),
        header: () => <span>Action</span>,
        footer: (info) => info.column.id,
      }),
    ],
    []
  );
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
    if( disabled ) return;
    setIsOpen((prev) => {
      return !prev;
    });

    if (!isOpen) dispatch(getCropTypeData());
    console.log("Toogle Called");
  }

  const onRowClick = (data) => {
    setSelectedColumn(data.original);
  };

  const closeDetailView = () => {
    setSelectedColumn(null);
  };

  const onRowSelect = (e, value) => {
    setSelectedRow(value);
    e.stopPropagation();
  };
  return (
    <React.Fragment>
      <Col md={12}>
        <Label htmlFor="validationDefault01" className="form-label">
          Crop Type
        </Label>
        <div onClick={toggle} className="w-100">
          <Input
            type="text"
            value={value}
            className="form-control w-100"
            placeholder="Crop Type"
            readOnly
          />
        </div>
      </Col>

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
        <ModalBody style={{ height: selectedColumn ? "40vh" : "60vh" }}>
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
            <div className="d-flex flex-column justify-content-between">
              <div>
                <div>
                  <h6>Crop Type Name</h6>
                  <p>{selectedColumn.cropTypeName}</p>
                </div>
                <div>
                  <h6>Description</h6>
                  <p>{selectedColumn.description}</p>
                </div>
              </div>
              <div className="d-flex justify-content-end"></div>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          {selectedColumn ? (
            <Button
              size="sm"
              className="bg-gradient"
              color="primary"
              onClick={(e) => {
                onRowSelect(e, selectedColumn);
                toggle();
              }}
            >
              Select
            </Button>
          ) : undefined}
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}
