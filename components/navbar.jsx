import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Logo1 from "../public/images/logo1.png";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar shadow-sm p-3 mb-5 bg-white" style={{ backgroundColor: "white" }}>
      <Container>
        <Navbar.Brand href="#">
          <Image src={Logo1} alt="logo-1" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" my-2 my-lg-0 mx-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Beranda</Nav.Link>
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sejarah</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Daftar Menteri</NavDropdown.Item>
              <NavDropdown.Item href="#action5"> Visi & Misi</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Tugas & Fungsi</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Struktur Organisasi & Unit Kerja</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Agenda</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Daftar Email Satker & UPT </NavDropdown.Item>
              <NavDropdown.Item href="#action9">Narasi 4 Pilar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Info Publik" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sejarah</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Daftar Menteri</NavDropdown.Item>
              <NavDropdown.Item href="#action5"> Visi & Misi</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Tugas & Fungsi</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Struktur Organisasi & Unit Kerja</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Agenda</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Daftar Email Satker & UPT </NavDropdown.Item>
              <NavDropdown.Item href="#action9">Narasi 4 Pilar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Publikasi" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sejarah</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Daftar Menteri</NavDropdown.Item>
              <NavDropdown.Item href="#action5"> Visi & Misi</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Tugas & Fungsi</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Struktur Organisasi & Unit Kerja</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Agenda</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Daftar Email Satker & UPT </NavDropdown.Item>
              <NavDropdown.Item href="#action9">Narasi 4 Pilar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Layanan" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sejarah</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Daftar Menteri</NavDropdown.Item>
              <NavDropdown.Item href="#action5"> Visi & Misi</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Tugas & Fungsi</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Struktur Organisasi & Unit Kerja</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Agenda</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Daftar Email Satker & UPT </NavDropdown.Item>
              <NavDropdown.Item href="#action9">Narasi 4 Pilar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
