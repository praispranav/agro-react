import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
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
import Select from "react-select";

const columnHelper = createColumnHelper();

const ACTIVITY_TYPE_OPTIONS = [
  { label: "My Activity", value: "1" },
  { label: "All User Activity", value: "2" },
];

const USER_ACTIVITY_TYPE = {
  VIEW: "View",
  ADD: "Add",
  EDIT: "Edit",
  DELETE: "Delete",
};

const defaultData = [
  {
    serialNo: "1",
    name: "Pranav Kumar",
    email: "praispranav@gmail.com",
    role: "Admin",
    accessGroup: "B",
    userActivityType: USER_ACTIVITY_TYPE.VIEW,
    modulePageName: "Reporting",
    route: "/reporting/reporting-analytics",
  },
  {
    serialNo: "2",
    name: "Pranav Kumar",
    email: "praispranav@gmail.com",
    role: "Admin",
    accessGroup: "B",
    userActivityType: USER_ACTIVITY_TYPE.VIEW,
    modulePageName: "Reporting",
    route: "/reporting/reporting-analytics",
  },
  {
    serialNo: "3",
    name: "Pranav Kumar",
    email: "praispranav@gmail.com",
    role: "Admin",
    accessGroup: "B",
    userActivityType: USER_ACTIVITY_TYPE.VIEW,
    modulePageName: "Reporting",
    route: "/reporting/reporting-analytics",
  },
];

const getActivityTypeColor = (value) => {
  if (value === USER_ACTIVITY_TYPE.VIEW) return "info";
  if (value === USER_ACTIVITY_TYPE.ADD) return "secondary";
  if (value === USER_ACTIVITY_TYPE.EDIT) return "warning";
  if (value === USER_ACTIVITY_TYPE.DELETE) return "danger";
};

const columns = [
  columnHelper.accessor((row) => row.serialNo, {
    id: "serialNo",
    cell: (info) => info.getValue(),
    header: () => <span>Serial No</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("name", {
    id: "name",
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.role, {
    id: "role",
    cell: (info) => info.getValue(),
    header: () => <span>Role</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.accessGroup, {
    id: "accessGroup",
    cell: (info) => info.getValue(),
    header: () => <span>Access Group</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.userActivityType, {
    id: "userActivityType",
    cell: (info) => (
      <Badge pill={true} color={getActivityTypeColor(info.getValue())}>
        {info.getValue()}
      </Badge>
    ),
    header: () => <span>User Activity Type</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.modulePageName, {
    id: "modulePageName",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Module/Page Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.route, {
    id: "route",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Route</span>,
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
  const [selectedActivityType, setSelectedActivityType] = useState(
    ACTIVITY_TYPE_OPTIONS[0]
  );

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

  document.title = "Activity | WeCall";
  if (!columns) return <></>;
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <div className="row justify-content-between align-items-center">
                <Col
                  xl={selectedColumns.length > 1 ? 3 : 3}
                  className="mb-0 pb-0"
                >
                  <div className="mb-0">
                    <Select
                      value={selectedActivityType}
                      onChange={() => {}}
                      options={ACTIVITY_TYPE_OPTIONS}
                    />
                  </div>
                </Col>
                <Col xl={4}>
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
