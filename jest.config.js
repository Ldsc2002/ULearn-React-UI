module.exports = {
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
  },
  "collectCoverageFrom": ["./mocks/**", "./src/components/app/ScreenContext.jsx", "./src/components/biblioteca/book.jsx", "./src/components/biblioteca/bookShelfService.jsx","./src/components/calendario/Calendario.jsx","./src/components/calendario/CalendarioFuncionalidad.jsx","./src/components/firebase/firebase.jsx", "./src/components/login/**","./src/components/pizarron/**","./src/components/signup/**","./src/components/start/**","./src/components/user/**", "./src/components/navigation/**"],
  testEnvironment: 'jsdom'
}