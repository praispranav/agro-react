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
  import { getCropTypeData, getVarietyTypeData } from "../../../store/lookup/actions";
  import styled from "styled-components";
import { getVarietyType } from "../../../store/lookup/saga";
  
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
    columnHelper.accessor("varietyTypeID", {
      cell: (info) => info.getValue(),
      header: () => <span>Id</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.varietyName, {
      id: "varietyName",
      cell: (info) => info.getValue(),
      header: () => <span>Variety Type Name</span>,
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
  
  export default function VarietyType() {
    const { data } = useSelector((state) => ({
      data: state.Lookup.varietyType,
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
  
      if (!isOpen) dispatch(getVarietyTypeData());
    }
    return (
      <React.Fragment>
        <Button color="primary" outline onClick={() => toggle()}>
          Variety Type
        </Button>
  
        <Modal id="farm-type" isOpen={isOpen} toggle={toggle} centered size="lg">
          <ModalHeader className="d-flex justify-content-between">
            <h5 className="card-title">Variety Type</h5>
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
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
  