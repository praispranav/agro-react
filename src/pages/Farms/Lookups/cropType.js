import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { default as React, useMemo, useState } from "react";
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

export default function CropType({ setSelectedRow, selectedRow }) {
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

  const columns = useMemo(
    () => [
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
            onClick={() => setSelectedRow(info.row.original)}
          >
            Select
          </Button>
        ),
        header: () => <span>Action</span>,
        footer: (info) => info.column.id,
      }),
    ],
    [data]
  );

  function toggle() {
    setIsOpen((prev) => {
      return !prev;
    });

    if (!isOpen) dispatch(getCropTypeData());
  }
  return (
    <React.Fragment>
      <Button color="primary" outline onClick={() => toggle()} className='w-100'>
        Crop Type
      </Button>

      <Modal id="farm-type" isOpen={isOpen} toggle={toggle} centered size="lg">
        <ModalHeader className="d-flex justify-content-between">
          <h5 className="card-title">
            {(selectedRow && selectedRow.cropTypeName) || "Crop Type"}
          </h5>
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
