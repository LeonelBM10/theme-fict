import { getConfig } from '@edx/frontend-platform';
import { breakpoints } from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import { DefaultLargeLayout, DefaultMediumLayout, DefaultSmallLayout } from './components/default-layout';
import {
  ImageExtraSmallLayout, ImageLargeLayout, ImageMediumLayout, ImageSmallLayout,
} from './components/image-layout';
import { AuthLargeLayout, AuthMediumLayout, AuthSmallLayout } from './components/welcome-page-layout';

const BaseContainer = ({ children, showWelcomeBanner, fullName }) => {
  const enableImageLayout = getConfig().ENABLE_IMAGE_LAYOUT;

  if (enableImageLayout) {
    return (
      <div className="layout">
        <MediaQuery maxWidth={breakpoints.extraSmall.maxWidth - 1}>
          {showWelcomeBanner ? <AuthSmallLayout fullName={fullName} /> : <ImageExtraSmallLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.small.minWidth} maxWidth={breakpoints.small.maxWidth - 1}>
          {showWelcomeBanner ? <AuthSmallLayout fullName={fullName} /> : <ImageSmallLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.medium.minWidth} maxWidth={breakpoints.large.maxWidth - 1}>
          {showWelcomeBanner ? <AuthMediumLayout fullName={fullName} /> : <ImageMediumLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
          {showWelcomeBanner ? <AuthLargeLayout fullName={fullName} /> : <ImageLargeLayout />}
        </MediaQuery>
        <div className={classNames('content', { 'align-items-center mt-0': showWelcomeBanner })}>
          {/* SOLUCIÓN: Contenedor Flexbox para centrar perfectamente el formulario */}
          <div className="d-flex w-100 min-vh-100 justify-content-center align-items-center">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="extra-large-screen-top-stripe position-absolute w-100 p-0" style={{ top: 0, left: 0, zIndex: 1050 }} />
      <div className="layout">
        <MediaQuery maxWidth={breakpoints.small.maxWidth - 1}>
          {showWelcomeBanner ? <AuthSmallLayout fullName={fullName} /> : <DefaultSmallLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.medium.minWidth} maxWidth={breakpoints.large.maxWidth - 1}>
          {showWelcomeBanner ? <AuthMediumLayout fullName={fullName} /> : <DefaultMediumLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
          {showWelcomeBanner ? <AuthLargeLayout fullName={fullName} /> : <DefaultLargeLayout />}
        </MediaQuery>
        <div className={classNames('content', { 'align-items-center mt-0': showWelcomeBanner })}>
          {/* SOLUCIÓN: Contenedor Flexbox para centrar perfectamente el formulario */}
          <div className="d-flex w-100 min-vh-30 justify-content-center align-items-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

BaseContainer.defaultProps = {
  showWelcomeBanner: false,
  fullName: null,
};

BaseContainer.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeBanner: PropTypes.bool,
  fullName: PropTypes.string,
};

export default BaseContainer;