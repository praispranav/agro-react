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
import { getIrrigationData } from "../../../store/lookup/actions";
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
  columnHelper.accessor("irrigationTypeID", {
    cell: (info) => info.getValue(),
    header: () => <span>Id</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.irrigationTypeName, {
    id: "irrigationTypeName",
    cell: (info) => info.getValue(),
    header: () => <span>Irrigation Type</span>,
    footer: (info) => info.column.id,
  }),
//   columnHelper.accessor((row) => row.description, {
//     id: "description",
//     cell: (info) => (
//       <p
//         className="m-0 p-0"
//         style={{ width: "200px", textOverflow: "ellipsis", overflow: "hidden" }}
//       >
//         {info.getValue()}
//       </p>
//     ),
//     header: () => <span>Description</span>,
//     footer: (info) => info.column.id,
//   }),
  columnHelper.accessor((row) => row.isTraditionalFarmType, {
    id: "isTraditionalFarmType",
    cell: (info) => <Badge color={getBadges(info.getValue())}>{info.getValue() ? "Yes" : "No"}</Badge>,
    header: () => <span>Traditional Farm</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.isHydroponicFarmType, {
    id: "isHydroponicFarmType",
    cell: (info) => <Badge color={getBadges(info.getValue())}>{info.getValue() ? "Yes" : "No"}</Badge>,
    header: () => <span>Hydro Phonic Farm</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.isAeroponicFarmType, {
    id: "isAeroponicFarmType",
    cell: (info) => <Badge color={getBadges(info.getValue())}>{info.getValue() ? "Yes" : "No"}</Badge>,
    header: () => <span>Aero Phonic Farm</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.isAquaponicFarmType, {
    id: "isAquaponicFarmType",
    cell: (info) => <Badge color={getBadges(info.getValue())}>{info.getValue() ? "Yes" : "No"}</Badge>,
    header: () => <span>Aqua Phonic Farm</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.isVerticalFarmType, {
    id: "isVerticalFarmType",
    cell: (info) => <Badge color={getBadges(info.getValue())}>{info.getValue() ? "Yes" : "No"}</Badge>,
    header: () => <span>Vertical Farm Type</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.isPrecisionAgricultureType, {
    id: "isPrecisionAgricultureType",
    cell: (info) => <Badge color={getBadges(info.getValue())}>{info.getValue() ? "Yes" : "No"}</Badge>,
    header: () => <span>Precision Agriculture Type</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.id, {
    id: "Action",
    cell: (info) => (
      <Button size="sm" className="bg-gradient" color="light" style={{ position: "sticky", top: "0px", right: "0px"}}>
        Select
      </Button>
    ),
    header: () => <div style={{ position: "sticky", top: "0px", right: "0px"}}>Action</div>,
    footer: (info) => info.column.id,
  }),
];

export default function IrrigationType() {
  const { data } = useSelector((state) => ({
    data: state.Lookup.irrigation.slice(0,10),
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

    if (!isOpen) dispatch(getIrrigationData());
  }
  return (
    <React.Fragment>
      <Button color="primary" outline onClick={() => toggle()}>
        Irrigation Type
      </Button>

      <Modal id="farm-type" isOpen={isOpen} style={{ height: "70vh", overflow: "hidden" }} toggle={toggle} centered size="xl">
        <ModalHeader className="d-flex justify-content-between">
          <h5 className="card-title">Irrigation Type</h5>
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
