import { styled } from "@mui/material/styles";

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) => theme.spacing(5)} 0;
  text-align: center;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-style: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-style: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5)} 0;
  color: ${({ theme }) => theme.palette.text.primary};
  font-style: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-style: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
