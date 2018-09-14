import Link from "next/link";
import { Anchor, Status } from "../styles";

const columns = [
  {
    Header: "Nombre",
    accessor: "fullName"
  },
  {
    Header: "Teléfono",
    accessor: "phone"
  },
  {
    Header: "",
    accessor: "howDidYouFindUsText",
    Cell: row => <span title="">{row.original.howDidYouFindUsText}</span>
  },
  {
    Header: "Estado pruebas",
    accessor: "status.success",
    Cell: row => (
      <Status>
        <span
          className={`in-progress ${
            row.original.status.success ? "success" : ""
          }
            ${row.original.status.isFailed ? "failed" : ""}`}
        >
          {row.original.status.message}
        </span>
      </Status>
    )
  },
  {
    Header: "Ver",
    accessor: "fullName",
    Cell: row => (
      <Link href={`users-results/${row.original.id}`}>
        <Anchor>Ver</Anchor>
      </Link>
    )
  }
];

export default columns;
