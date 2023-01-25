import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardHeader,
  Input,
  Row,
  Table,
  Badge,
} from "reactstrap";
import OnlineOfflineStatus from "../../../Components/Common/OnlineOfflineStatus";

const columnHelper = createColumnHelper();

const defaultData = [
  {
    serialNo: "1",
    firstName: "Pranav",
    lastName: "Kumar",
    mobileNo: "6203902842",
    email: "praispranav@gmail.com",
    status: "Active",
    verified: true,
    online: true,
  },
  {
    serialNo: "2",
    firstName: "Omkar",
    lastName: "Nath",
    mobileNo: "6203902842",
    email: "praispranav@gmail.com",
    status: "Inactive",
    verified: true,
    online: false,
  },
  {
    serialNo: "3",
    firstName: "Ompriya",
    lastName: "Kumari",
    mobileNo: "6203902842",
    email: "praispranav@gmail.com",
    status: "Blocked",
    verified: false,
    online: true,
  },
  {
    online: true,
    serialNo: "4",
    firstName: "Riti",
    lastName: "Shree",
    mobileNo: "6203902842",
    email: "praispranav@gmail.com",
    status: "Active",
    verified: false,
  },
];

const getColor = (value) => {
  if (value === "Active") return "info";
  if (value === "Inactive") return "secondary";
  if (value === "Blocked") return "danger";
};

const columns = [
  columnHelper.accessor((row) => row.serialNo, {
    id: "serialNo",
    cell: (info) => info.getValue(),
    header: () => <span>Serial No</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("firstName", {
    id: "firstName",
    cell: (info) => info.getValue(),
    header: () => <span>First Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.mobileNo, {
    id: "Mobile No",
    cell: (info) => info.getValue(),
    header: () => <span>Mobile No</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.email, {
    id: "Email",
    cell: (info) => info.getValue(),
    header: () => <span>Email</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.status, {
    id: "Status",
    cell: (info) => (
      <Badge pill={true} color={getColor(info.getValue())}>
        {info.getValue()}
      </Badge>
    ),
    header: () => <span>Status</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.verified, {
    id: "Verified",
    cell: (info) => (
      <Badge color={info.getValue() ? "primary" : "warning"}>
        {info.getValue() ? "Yes" : "No"}
      </Badge>
    ),
    header: () => <span>Verified</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.online, {
    id: "Online/Offline",
    cell: (info) => <OnlineOfflineStatus status={info.getValue()} />,
    header: () => <span>Online/Offline</span>,
    footer: (info) => info.column.id,
  }),
];

const SingleOptions = [
  { value: "Choices 1", label: "Choices 1" },
  { value: "Choices 2", label: "Choices 2" },
  { value: "Choices 3", label: "Choices 3" },
  { value: "Choices 4", label: "Choices 4" },
];

export default function DataTable() {
  const [data, setData] = useState([...defaultData]);
  // const [columns, setColumns] = useState();
  const [selectedMulti, setSelectedOption] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!columns) return <></>;
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <div className="row justify-content-between align-items-center">
                <Col
                  xl={selectedColumns.length > 1 ? 8 : 5}
                  className="mb-0 pb-0"
                >
                  <FormGroup row className="mb-0-imp align-items-center">
                    <Col xxl={8} md={6}>
                      <div className="form-icon">
                        <Input
                          type="text"
                          className="form-control form-control-icon"
                          id="iconInput"
                          placeholder="Search"
                        />
                        <i className="ri-search-line"></i>
                      </div>
                    </Col>
                  </FormGroup>
                </Col>
                <Col xl={4}>
                  <div className="d-flex justify-content-end">
                    <Button color="info" size="sm">
                      Export as PDF
                    </Button>
                    <Button className="ms-3" size="sm" color="primary">
                      Export as CSV
                    </Button>
                  </div>
                </Col>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <CardBody>
              <div className="live-preview">
                <Row>
                  <Col xl={12}>
                    <div className="table-responsive">
                      <Table className="table-hover align-middle table-nowrap mb-0">
                        <thead>
                          {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                              {headerGroup.headers.map((header) => (
                                <th
                                  key={header.id}
                                  style={{ width: header.getSize() + "px" }}
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
                                    desc: (
                                      <i className="mdi mdi-chevron-down"></i>
                                    ),
                                  }[header.column.getIsSorted()] ?? (
                                    <i
                                      style={{ visibility: "hidden" }}
                                      className="mdi mdi-chevron-down"
                                    ></i>
                                  )}

                                  <div
                                    className="form-check mt-2"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Select
                                      value={selectedMulti}
                                      isMulti={true}
                                      onChange={() => {
                                        //   handleMulti();
                                      }}
                                      options={SingleOptions}
                                    />
                                  </div>
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
                    <div className="d-flex justify-content-center mt-4">
                      <Pagination className="pagination-lg pagination-rounded">
                        <PaginationItem disabled>
                          {" "}
                          <PaginationLink to="#"> ← </PaginationLink>{" "}
                        </PaginationItem>
                        <PaginationItem>
                          {" "}
                          <PaginationLink to="#"> 1 </PaginationLink>{" "}
                        </PaginationItem>
                        <PaginationItem active>
                          {" "}
                          <PaginationLink to="#"> 2 </PaginationLink>{" "}
                        </PaginationItem>
                        <PaginationItem>
                          {" "}
                          <PaginationLink to="#"> 3 </PaginationLink>{" "}
                        </PaginationItem>
                        <PaginationItem>
                          {" "}
                          <PaginationLink to="#"> 4 </PaginationLink>{" "}
                        </PaginationItem>
                        <PaginationItem>
                          {" "}
                          <PaginationLink to="#"> 5 </PaginationLink>{" "}
                        </PaginationItem>
                        <PaginationItem>
                          {" "}
                          <PaginationLink to="#"> → </PaginationLink>{" "}
                        </PaginationItem>
                      </Pagination>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
