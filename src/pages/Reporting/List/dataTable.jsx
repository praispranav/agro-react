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
} from "reactstrap";

const columnHelper = createColumnHelper();

const defaultData = [
  {
    CallDateTime: "tanner",
    InboundCallId: "linsley",
    Publisher: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    CallDateTime: "tandy",
    InboundCallId: "miller",
    Publisher: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    CallDateTime: "joe",
    InboundCallId: "dirte",
    Publisher: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columns = [
  columnHelper.accessor((row) => row.InboundCallId, {
    id: "InboundCallId",
    cell: (info) => info.getValue(),
    header: () => <span>Inbound Call Id</span>,
    footer: (info) => info.column.id,
    minSize: 700,
    size: 500,
    
  }),
  columnHelper.accessor("CallDateTime", {
    cell: (info) => info.getValue(),
    header: () => <span>Call Date Time</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Publisher, {
    id: "Publisher",
    cell: (info) => info.getValue(),
    header: () => <span>Publisher</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Campaign, {
    id: "Campaign",
    cell: (info) => info.getValue(),
    header: () => <span>Campaign</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Target, {
    id: "Target",
    cell: (info) => info.getValue(),
    header: () => <span>Target</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Buyer, {
    id: "Buyer",
    cell: (info) => info.getValue(),
    header: () => <span>Buyer</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.LeadSource, {
    id: "LeadSource",
    cell: (info) => info.getValue(),
    header: () => <span>Lead Source</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.ConnectedDurationSec, {
    id: "ConnectedDurationSec",
    cell: (info) => info.getValue(),
    header: () => <span>Connected Duration</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Payout, {
    id: "Payout",
    cell: (info) => info.getValue(),
    header: () => <span>Payout</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Dialed, {
    id: "Dialed",
    cell: (info) => info.getValue(),
    header: () => <span>Dialed</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.TelcoCost, {
    id: "TelcoCost",
    cell: (info) => info.getValue(),
    header: () => <span>TelcoCost</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.ConversionAdjusted, {
    id: "ConversionAdjusted",
    cell: (info) => info.getValue(),
    header: () => <span>Conversion Adjusted</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.PayoutAdjusted, {
    id: "PayoutAdjusted",
    cell: (info) => info.getValue(),
    header: () => <span>Payout Adjusted</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.ConversionAdjusted, {
    id: "ConversionAdjusted",
    cell: (info) => info.getValue(),
    header: () => <span>Conversion Adjusted</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.IsConverted, {
    id: "IsConverted",
    cell: (info) => info.getValue(),
    header: () => <span>Converted</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.ConversionAdjusted, {
    id: "ConversionAdjusted",
    cell: (info) => info.getValue(),
    header: () => <span>Conversion Adjusted</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.IsBillable, {
    id: "IsBillable",
    cell: (info) => info.getValue(),
    header: () => <span>Billable</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor("status", {
  //   header: "Status",
  //   footer: (info) => info.column.id,
  // }),
  // columnHelper.accessor("progress", {
  //   header: "Profile Progress",
  //   footer: (info) => info.column.id,
  // }),
];

const keys = [
  {
    value: "Hangup",
    label: "Hangup",
  },
  {
    value: "CallerId",
    label: "CallerId",
  },
  {
    value: "InboundCallId",
    label: "InboundCallId",
  },
  {
    value: "Publisher",
    label: "Publisher",
  },
  {
    value: "PublisherId",
    label: "PublisherId",
  },
  {
    value: "Revenue",
    label: "Revenue",
  },
  {
    value: "Campaign",
    label: "Campaign",
  },
  {
    value: "Target",
    label: "Target",
  },
  {
    value: "TargetId",
    label: "TargetId",
  },
  {
    value: "Buyer",
    label: "Buyer",
  },
  {
    value: "BuyerId",
    label: "BuyerId",
  },
  {
    value: "ConnectedDurationSec",
    label: "ConnectedDurationSec",
  },
  {
    value: "Duplicate",
    label: "Duplicate",
  },
  {
    value: "Payout",
    label: "Payout",
  },
  {
    value: "Dialed",
    label: "Dialed",
  },
  {
    value: "RecordingUrl",
    label: "RecordingUrl",
  },
  {
    value: "TelcoCost",
    label: "TelcoCost",
  },
  {
    value: "ConversionAdjusted",
    label: "ConversionAdjusted",
  },
  {
    value: "PayoutAdjusted",
    label: "PayoutAdjusted",
  },
  {
    value: "IsConverted",
    label: "IsConverted",
  },
  {
    value: "IsBillable",
    label: "IsBillable",
  },
  {
    value: "JornayaId",
    label: "JornayaId",
  },
  {
    value: "LeadSource",
    label: "LeadSource",
  },
  { value: "CallDateTime", label: "CallDateTime" },
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
            <CardHeader className="align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">Select Columns</h4>
            </CardHeader>
            <CardBody>
              <Row>
                {keys.map((i) => (
                  <Col lg={3} key={i}>
                    <div className="form-check">
                      <Label>{i.value}</Label>
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkAll"
                        defaultValue="option1"
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
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
                                  colSpan={3}
                                  style={{ width: header.getSize() + 'px'}}
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
                                <td scope="row" colSpan={2} key={cell.id}>
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
                          <PaginationLink to="#"> ??? </PaginationLink>{" "}
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
                          <PaginationLink to="#"> ??? </PaginationLink>{" "}
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
